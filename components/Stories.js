import { useEffect, createContext } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories(){
    
    // useEffect(() => {
    //     const suggestions = [...Array(20)].map((_,i) => (
    //         {
    //             ...faker.helpers.contextualCard(),
    //             id:i,
    //         }
    //     ))

    // }, []);
    
    const {data : session} = useSession(); 

    return(

        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm 
        overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">

        {session && (
            <Story img={session.user.image} username={session.user.username} />
        )}

                {/* Stories */}
            <figure>
                <img 
                src="https://media1.popsugar-assets.com/files/thumbor/dsCqdEx6NSqODU0ihVHSUCDwztk/562x135:2177x1750/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/020/n/1922398/3794d5c55d76e058296c92.97678413_/i/Selena-Gomez.jpg"
                alt="profile_story"
                className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain
                hover:scale-110 transition transform duration-200 ease-out "
                />
                <figcaption className="text-xs w-14 truncate text-center">selena_gomez</figcaption>
            </figure>


            <figure>
            <img 
            src="https://i.insider.com/5e67b51bf0b61066ae625c16?width=700"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">Mann_Savani</figcaption>
            </figure>


            <figure>
            <img 
            src="https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj"
            alt="profile_story"
            className="h-14 w-14 rounded-full   p-[1.5px] border-red-500 border-2 object-contain
             hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">oliviaRodrigo</figcaption>
            </figure>


            <figure>
            <img 
            src="https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full   p-[1.5px] border-red-500 border-2 object-contain 
            hover:scale-110 transition transform duration-200 ease-out "
            />
            <figcaption className="text-xs w-14 truncate text-center">Taylor793</figcaption>
            </figure>


            <figure>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDiTrd_cpP2PzfIy5E1gdX1Xdn3vBT89KqsS60Z47JpYg7ZaBMV
            70NFSRxDf-jD8tp3k&usqp=CAU"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">user783435dfs</figcaption>
            </figure>


            <figure>
            <img 
            src="https://i.pinimg.com/736x/25/4b/04/254b0457df2facf12b95d749117aaabc.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">niki_vdgrgab</figcaption>
            </figure>


            <figure>
            <img 
            src="https://p.favim.com/orig/2018/12/18/cute-mirror-selfie-female-Favim.com-6681808.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">kris_numpz</figcaption>
            </figure>


            <figure>
            <img 
            src="https://cdn.dxomark.com/wp-content/uploads/medias/post-46226/DynamicRange_SamsungGalaxyS10Plus.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">ayush_3428</figcaption>
            </figure>


            <figure>
            <img 
            src="https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzZWxmaWV8ZW58MHx8MHx8&w=1000&q=80"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">kaylon_pis32</figcaption>
            </figure>

 
            


            <figure>
            <img 
            src="https://cdn.shopify.com/s/files/1/0553/6422/3136/files/tracy-lynn-logan-reinard-075-_40tracylynn_dot_photo.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">Scottie58</figcaption>
            </figure>


            <figure>
            <img 
            src="https://media1.popsugar-assets.com/files/thumbor/mSw6KtNHwv_Cqbo4Ujx3ZA28PoQ/878x0:2139x1261/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/20/766/n/1922398/4101d0a75e9dda8ba7da41.08531277_/i/Ian-Somerhalder.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">Ian_Som</figcaption>
            </figure>


            <figure>
            <img 
            src="https://images.prestigeonline.com/wp-content/uploads/sites/5/2021/07/15001618/Rare-Beauty-Model-Shots-3-900x900.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">selena_gomez</figcaption>
            </figure>


            <figure>
            <img 
            src="https://images.prestigeonline.com/wp-content/uploads/sites/5/2021/07/15001618/Rare-Beauty-Model-Shots-3-900x900.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">selena_gomez</figcaption>
            </figure>


            <figure>
            <img 
            src="https://media1.popsugar-assets.com/files/thumbor/km-MnjjG6UOc25G8BxH7y4I__i0/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2010/02/08/2/192/1922398/d5a836bed4db59dd_paul/i/Paul-Wesley.jpg"
            alt="profile_story"
            className="h-14 w-14 rounded-full  p-[1.5px] border-red-500 border-2  object-contain 
            hover:scale-110 transition transform duration-200 ease-out"
            />
            <figcaption className="text-xs w-14 truncate text-center">Paul_wesley543</figcaption>
            </figure>
            
             
        </div>

    );

}export default Stories