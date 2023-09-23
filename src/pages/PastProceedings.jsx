import { Card } from 'flowbite-react'
import React from 'react'

const PastProceedings = () => {
  return (
    <div className='lg:ml-64  mt-4 p-16'>
        <div className='lg:flex ' >
            <div className='md:w-1/2  '>
           
                <div className="max-w-sm ">
                <a className='hover:no-underline' target="_blank" href='https://link.springer.com/book/10.1007/978-981-15-2696-1'>

                
                <Card
                className=''
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    // imgSrc="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-2696-1?as=webp"
                    link="https://link.springer.com/book/10.1007/978-981-15-2696-1"
                    // className='size-sm'
                >
                    <img className='h-96' src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-2696-1?as=webp"></img>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IPDIMS 2019 
                    </h5>
                    <h5 className='text-xl font-bold'>Innovative Product Design and Intelligent Manufacturing Systems </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Presents select proceedings of the international conference ICIPDIMS 2019,
                    Focuses on applications of smart tools in the manufacturing industry,
                    Discusses latest trends in design methodologies, robotics and automation.
                    </p>
                </Card>
                </a>
                
                </div>
                
            </div>
            <div className='md:w-1/2'>
           
                <div className="max-w-sm">
                <a className='hover:no-underline' target="_blank" href='https://link.springer.com/book/10.1007/978-981-15-9853-1'>

                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    // imgSrc="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-9853-1?as=webp"
                    // className='size-sm'
                >
                    <img className='h-96' src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-2696-1?as=webp"></img>

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IPDIMS 2020 Vol - 1
                    </h5>
                    <h5 className='text-xl font-bold'>Advanced Manufacturing Systems and Innovative Product Design  </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Presents select proceedings of the international conference ICIPDIMS 2020 Vol-1,
                    Focuses on applications of smart tools in the manufacturing industry,
                    Discusses the latest trends in design methodologies, robotics, and automation.
                    </p>
                </Card>
                </a>
                </div>

            </div>
            
        </div>






        
        <div className='lg:flex mt-8' >

        <div className='md:w-1/2'>
           
                <div className="max-w-sm">
                <a className='hover:no-underline' target="_blank" href='https://link.springer.com/book/10.1007/978-981-19-0296-3'>

                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    // imgSrc="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-19-0296-3?as=webp"
                    // className='size-sm'
                >
                    <img className='h-96' src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-2696-1?as=webp"></img>

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IPDIMS 2020 Vol - 2

                    </h5>
                    <h5 className='text-xl font-bold'>Applications of Computational Methods in Manufacturing and Product Design </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Presents select proceedings of the international conference ICIPDIMS 2020 Vol-2,
                    Focuses on applications of smart tools in the manufacturing industry,
                    Discusses latest trends in design methodologies, robotics and automation.
                    </p>
                </Card>
                </a>
                </div>
                

            </div>


            <div className='md:w-1/2'>
           
                <div className="max-w-sm">
                <a className='hover:no-underline' target="_blank" href='https://link.springer.com/book/10.1007/978-981-19-4606-6'>

                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    // imgSrc="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-19-4606-6?as=webp"
                    // className='size-sm'
                >
                    <img className='h-96' src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-15-2696-1?as=webp"></img>

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IPDIMS 2021
                    </h5>
                    <h5 className='text-xl font-bold'>Recent Trends in Product Design and Intelligent Manufacturing Systems  </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    
                    Presents select proceedings of IPDIMS 2021,
                    Covers the recent findings in the area of intelligent manufacturing systems,
                    Brings together a group of top scholars on the much debated issues on the advancements in research fields.
                    </p>
                </Card>
                </a>
                
                </div>
                
            </div>
            
            
            
        </div>
    </div>

  )
}

export default PastProceedings