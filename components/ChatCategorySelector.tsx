  "use client"
  import { groq } from "next-sanity"
  import { useState, Fragment, useEffect } from "react"
  import { Menu, Transition } from '@headlessui/react'
  import { ChevronDownIcon } from '@heroicons/react/20/solid'
  import {useChatTypeStore} from 'src/store'

  type ChatCategorySelectorProps = {
      onChange?: (category: string) => void
    }

    function classNames(...classes: string[]):string {
      return classes.filter(Boolean).join(' ')
    }
  
    

  const ChatCategorySelector = () => {
    const { chatType, setChatType } = useChatTypeStore();
    
      // const [category, setCategory] = useState("")
      // const [categoryQuery, setCategoryQuery] = useState("");

      // useEffect(() => {
      //   //use effect that builds a new query in case I want to send of a new query when the category changes, rather than just filtering out everything other than the desired category. 
      //   setCategoryQuery(
      //     groq`*[_type == "chatMessage" && references(*[_type == "chatType" && title == "${category}"]._id) ]`
      //   );
      // }, [category]);

      // useEffect(() => {

      // }, [categoryQuery])
      
      const handleCategoryChange = (
        e: React.MouseEvent<HTMLButtonElement>
      ) => {
        const selectedCategory = e.currentTarget.textContent!.trim();
        // setCategory(selectedCategory);
        console.log(selectedCategory);
        setChatType(selectedCategory)
        console.log('useEffect', chatType);
        
      };

      useEffect(( )=> {
        console.log(`The chatType changed. It's now ${chatType}`)
      }, [chatType])

  
    return (
      <Menu as="div" className="relative inline-block text-right justify-center w-full">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-gray-100">
            Categorys
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-1/2 transform -translate-x-1/2 " >
            <div className="py-1">
              {
                //these should eventually be generated based on a list of categories provided by sanity rather than being hardcoded.
              }
              <Menu.Item>{({ active }) => (
                <button
                  onClick={(e) => handleCategoryChange(e)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm text-center w-full'
                  )}
                >
                  First set of chatTypes
                </button>
              )}
              </Menu.Item>
              <Menu.Item>{({ active }) => (
                <button
                  onClick={(e) => handleCategoryChange(e)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm text-center w-full'
                  )}
                >
                  Second set of chatTypes
                </button>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => handleCategoryChange(e)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm text-center w-full'
                  )}
                >
                  Third set of chatTypes
                </button>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => handleCategoryChange(e)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm text-center w-full'
                  )}
                >
                  Forth set of chatTypes
                </button>
              )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )

  }

  export default ChatCategorySelector






