import React from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function LeftSidebar() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
            <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="logo">
                Flowbite
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                    
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                    
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                    
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                    
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}