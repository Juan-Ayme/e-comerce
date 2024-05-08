import {TopMenu} from "@/components";

export default function ShopLayout({children}:
    {children: React.ReactNode;}) {
  return (
    <main>
        <TopMenu/>
        <div className="flex justify-center">
            <div className="w-full sm:w-[350px] px-10">
                {children}
            </div>
        </div>

    </main>
  );
}
