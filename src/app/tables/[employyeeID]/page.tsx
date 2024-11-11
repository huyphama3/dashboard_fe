import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import DataStatsTwo from "@/components/DataStats/DataStatsTwo";
import { useRouter } from "next/router";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ChartFour from "@/components/Charts/ChartFour";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <DataStatsTwo />
        <ChartFour />
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
