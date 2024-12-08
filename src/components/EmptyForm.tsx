'use client'
import { CreateForm } from '@/app/create/page'
import React from 'react'
import { Button } from './Button'
import { UpArrowIcon } from './Icon'
import { FormProvider, useFormContext } from '@/contexts/FormContext'

const EmptyFormContent = () => {
  const { state, dispatch } = useFormContext();
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FORM_NAME', payload: e.target.value })
  }
  return (
    <div className="max-w-[640px] flex flex-col h-screen border border-gray-200 mx-auto">
      <div className="flex max-w-[640px] h-14 border-b border-gray-200 justify-between items-center px-2">
        <input
          type="text"
          placeholder="Untitled form"
          className="p-2 border-none"
          onChange={changeName}
          value={state.title}
        />
        <Button
          className="pl-4 pr-[14px] gap-1 !text-gray-400"
          variant="default"
          disabled={true}
        >
          Preview <UpArrowIcon stroke="#959DA5" />
        </Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center gap-4 justify-center">
        <p className="text-xl text-gray-500">
          Your form is waiting. Add your first question.
        </p>
        <CreateForm />
      </div>
    </div>
  )
}

export const EmptyForm = () => {
  return (
    <FormProvider>
      <EmptyFormContent />
    </FormProvider>
  )
}