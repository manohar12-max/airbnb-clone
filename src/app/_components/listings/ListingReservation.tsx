import React from 'react'
import {Range} from "react-date-range"
import Calender from '../inputs/Calender'
import Button from '../Button'

interface ListingReservationProps{
    price: number,
    totalPrice: number,
    dateRange: Range,
    onChangeDate:(value:Range)=>void
    onSubmit:()=>void
    disabled?: boolean
    disabledDates:Date[]
}
const ListingReservation:React.FC<ListingReservationProps> = ({
 price,
  totalPrice,
  dateRange,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
    className='bg-white rounded-xl border-[1px] border-neutral-100 overflow-hidden'
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
           $ {price}
        </div>
        <div className="text-neutral-600 font-light">/ night</div>
      </div>
      <hr />
      <Calender
      value={dateRange}
      disabledDates={disabledDates}
      onChange={(value)=>{onChangeDate(value.selection)}}  
      />
      <hr />
      <div className="p-4">
       <Button disabled={disabled} label="Reserve" onClick={onSubmit}/>
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
            <div className="">Total</div>
            <div className="">$ {totalPrice}</div>
      </div>
    </div>
  )
}

export default ListingReservation
