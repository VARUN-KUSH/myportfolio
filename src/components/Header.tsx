import React, {useState} from 'react'
import Link from 'next/link'
import { IconMenu } from '@tabler/icons-react'

export interface Props {
  arr: string[];
}

const Header = ({arr}: Props) => {
  const [toggle, settoggle] = useState(false)
  return (
    <header className='flex'>
        <div>
            <h1>Varun</h1>
        </div>

        <ul className='xs:invisible'>
          {arr.map((item) => (
            <li className='' key={item}>
              <div></div>

              <Link href={`#{item}`}>{item}</Link>
            </li>
          )
          )}
        </ul>

        <div className='ml-0'>
          <IconMenu onClick={() => settoggle(!toggle)} />
          {
            toggle && (
            <ul>
                {arr.map((item) => (
                  <li>
                    <Link href={`#{item}`}>{item}</Link>
                  </li>
                ))  
                }
                

            </ul>
            )
           
          }
        </div>
        
        
    </header>
  )
}

export default Header