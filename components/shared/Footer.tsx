import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href='/'>
                    <Image
                        src="/assets/images/diamond.png"
                        alt="logo"
                        width={130}
                        height={50}
                    />
                </Link>

                <p>2023 Event Connect . All Rights reserved.</p>
            </div>
        </footer>
    )
}

