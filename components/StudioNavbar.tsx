import  Link  from 'next/link';
import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline'

function StudioNav(props: any) {
    
    return <header>
                <div className="flex items-center justify-between p-3">
                    <Link href="/" className='text-[#1C97C2] flex items-center m-2 '>
                        <ArrowUturnLeftIcon className='h-6 w-6 flex mr-2' />
                        Return to site</Link>             
                </div>
                {/* render the default sanity Nav under our custom nav */}
                <>{props.renderDefault(props)}</>
        </header>
}
export default StudioNav;