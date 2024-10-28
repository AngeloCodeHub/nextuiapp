
import { lusitana } from "@/config/fonts"

// UI components 元件
import { Card } from "../ui/dashboard/cards"
import RevenueChart from "../ui/dashboard/revenue-chart"
import LatestInvoices from "../ui/dashboard/latest-invoices"

// 擷取資料
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../lib/data"

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="總金額" value={totalPaidInvoices} type="collected" />
                <Card title="未開立" value={totalPendingInvoices} type="pending" />
                <Card title="發票總數" value={numberOfInvoices} type="invoices" />
                <Card title="客戶總數" value={numberOfCustomers} type="customers" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    )
}