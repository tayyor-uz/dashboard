import { Main } from '@/components/Executor/Main/Main'
import { Footer } from '@/components/Footer/Footer'
import { CustomerHeader } from '@/components/Header/CustomerHeader/CustomerHeader'

export const CustomerPage = () => {
    return (
        <>
            <CustomerHeader />
            <main className="flex w-full flex-col gap-[40px] px-[10px] py-[40px] md:px-[52px]">
                <Main />
            </main>
            <Footer />
        </>
    )
}