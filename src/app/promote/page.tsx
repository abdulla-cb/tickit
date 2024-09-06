'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import {
  BASE_SEPOLIA_CHAIN_ID,
} from '../../constants';
import { eventRegistryAddress, eventRegistryConfig } from 'src/generated';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/text-area';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  eventTime: z.date().optional(),
  ticketSaleStart: z.date().optional(),
  eventCapacity: z.coerce.number().positive(),
  maxGroupSize: z.coerce.number().positive(),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      eventCapacity: 0,
      maxGroupSize: 0,
      eventTime: undefined,
      ticketSaleStart: undefined,
    },
  });
  const router = useRouter()

  return (
    <div>
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your event. It cannot be changed after
                  submission.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  Please provide a short description of this event for the fans.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter the location of this event. Feel free to put 'onchain'
                  as a location!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Time</FormLabel>
                <FormControl>
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>When is the event occurring?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketSaleStart"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Ticket Sale Start</FormLabel>
                <FormControl>
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>
                  When should the tickets start to go on sale?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventCapacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Capacity</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormDescription>
                  This is the maximum number of tickets that will be sold
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxGroupSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Group Size</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormDescription>
                  This is the maximum number of tickets that can be bought at a
                  time.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <br />
      <Transaction
        contracts={[
          {
            ...eventRegistryConfig,
            functionName: 'registerEvent',
            args: [
              form.getValues().title,
              form.getValues().description,
              form.getValues().location,
              Math.floor(
                (form.getValues().ticketSaleStart?.getTime() ?? 0) / 1000,
              ),
              Math.floor((form.getValues().eventTime?.getTime() ?? 0) / 1000),
              Math.floor((form.getValues().eventTime?.getTime() ?? 0) / 1000),
              form.getValues().eventCapacity,
              form.getValues().maxGroupSize,
            ],
          },
        ]}
        className="w-[450px]"
        chainId={BASE_SEPOLIA_CHAIN_ID}
        onError={(err) => console.error(err)}
        onSuccess={({transactionReceipts}) => {
			transactionReceipts.forEach((receipt) => {
				receipt.logs.forEach((log) => {
					if(log.address == eventRegistryAddress.toLowerCase() && log.topics[0] == "0xd7a8ceb3170063379fe6831c546e506510ed2ff47586837e8c52320e996d361e") {
						console.log('Navigating to ', log.topics[1])
						router.push(`buy-tickets/${log.topics[1]}`)
					}
				})
			})
		}}
      >
        <TransactionButton
          disabled={!form.formState.isValid}
          text="Register Event"
          className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]"
        />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
