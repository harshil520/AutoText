"use client"
import React, { useState } from 'react'
import Search from './_components/Search'
import TemplateList from './_components/TemplateList'

export default function Dashboard() {

  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <Search onSearchInput={(value: any) => setSearchInput(value)} />
      <TemplateList searchInput={searchInput} />
    </div>
  )
}
