"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import querystring from "query-string";
interface CategoryBoxProps {
  label: string;
  icon: IconType;

  selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();


  const handleClick = useCallback(() => {
    let currentQuery = {};
    //checks if previously params are present in url if yes then converts it to json format 
    // eg from category=Beach to {category:Beach} with the help of querystring
    //and add that to the currentQuery
    if (params) {
      currentQuery = querystring.parse(params.toString());
    }
    
    const updateQuery: any = {
      ...currentQuery,
      category: label,
    };
    if (params?.get("category") === label) {
      delete updateQuery.category;
    }
    const url = querystring.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label,params,router]);
  return (
    <div
    onClick={handleClick}
      className={`
    flex flex-col
    items-center
    justify-center
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition 
     cursor-pointer
    ${
      selected
        ? "border-b-neutral-800 text-neutral-800"
        : "border-transparent text-neutral-500"
    }
    `}
    >
      <Icon size={26} />
      <div
        className="
     font-medium
     text-sm"
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;
