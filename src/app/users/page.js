import Users from "@/component/user/page";
export default function name({users}) {
    return (
        <div>
            <h1>lasdfjlakdsfj</h1>
            {
                users.map((user) => {
                    return(
                        <Users user={user}/>
                    )
                })
            }
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props:{
            users:data,
        },
    }
}