import React from 'react'

function Card({username='John', jobRole='Staff Engg.'}) {
    // console.log(props);
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.licdn.com/dms/image/C4D03AQEOKwy7uA0y-g/profile-displayphoto-shrink_800_800/0/1657560098714?e=1708560000&v=beta&t=8kksD5kGs7PZS7sfK6nNRcxLApcguGQ0QcTcxipP_ao" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, officia?
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {jobRole}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card