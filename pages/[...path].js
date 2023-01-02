import { useRouter } from "next/router"

export default function content() {
    const router = useRouter()
    const path = router.query.path
    const pathName = path.join('/')
    return (
        <h1>{pathName}</h1>
    )
}
