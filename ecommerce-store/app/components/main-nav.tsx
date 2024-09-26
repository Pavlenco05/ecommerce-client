"use client"

import { usePathname } from "next/navigation";
interface MainNavProps {
    data: any
};

    const MainNav: React.FC<MainNavProps> = ({
         data 
        }) => { 
            const pathname = usePathname();

            const routes = data.map((item: any) => ({
                href: `/category/${route.id}`,
                label: item.name,
                active: pathname === `/category/${item.id}`
            }));
    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {data.map((item) => (
                <Link key={item.id} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};
