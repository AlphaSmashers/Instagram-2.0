import { useSession , signOut} from "next-auth/react";

function MiniProfile(){

    //again we'll use the same command to hook up the our dynamic user session...
    const {data:session} = useSession();

    console.log(session);

    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="rounded-full border p-[2xl] w-16 h-16" src={session?.user?.image} />


            <div className="flex-1 mx-4">
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className="text-sm  text-gray-400">Welcome to Instagram</h3>
            </div>

            <button className="font-semibold text-blue-400 text-sm" onClick={signOut}>Sign Out</button>

        </div>
    )


}export default MiniProfile