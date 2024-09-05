"use client"

import Button from 'src/components/Button';
import EventCard from 'src/components/EventCard';
import { useReadEventRegistryGetEventById } from 'src/generated';

export default function Page({params}: {params: {slug: string}} ) {
  if (!params.slug.startsWith("0x")) {
	  return
  }
  const {data: result} = useReadEventRegistryGetEventById({args: [params.slug as `0x${string}`]})
  if(!result) {
	  //should probs do suspense..
	  return
  }

  return (
	  <div className="flex flex-col gap-8 w-full">
		  <EventCard event={result} />
		  <p className="text-lg">Select some friends to go to this event with!</p>
		  <MultiSelect />
		  <Button>
		  	Apply for Tickets!
		  </Button>
	  </div>
  )
}


const MultiSelect = () => {
	return <select multiple>
		<option value="abs">abs.base.eth</option>
	</select>
}
