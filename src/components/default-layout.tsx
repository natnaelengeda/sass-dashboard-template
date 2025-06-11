import React from 'react'

// Components
import { AppSidebar } from './app-sidebar';
import { Separator } from './ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface IDefaultLayout {
  children: React.ReactNode;
  components: string[];
}

export default function DefaultLayout({ children, components }: IDefaultLayout) {

  const HeadComponent = () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {
            components.map((comp, index: number) => {
              return (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      <BreadcrumbPage>
                        {comp}
                      </BreadcrumbPage>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {
                    index <= 1 &&
                    <BreadcrumbSeparator
                      className="hidden md:block" />
                  }
                </>
              );
            })
          }

        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger
              className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4" />
            <HeadComponent />
          </div>
        </header>
        <div
          className='p-5'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
