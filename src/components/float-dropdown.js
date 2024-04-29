"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import {
    Button,
    Input,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FloatDropdown = () => {
    const router = useRouter();
    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className="flex items-center absolute right-5 top-5 ">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                        My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">
                        Analytics
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={()=>setIsOpen(true)}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>



            <Modal className="p-5" isOpen={isOpen} hideCloseButton={true} placement="center">
            <ModalContent>
              <>
      
                <ModalBody>
                    <h1>آیا مایل به خروج از نرم افزار هستید؟</h1>
                  
                </ModalBody>
                <ModalFooter>
                  <div className="grid grid-cols-2 w-full gap-5 ">
                  
                      <Button
                         onClick={()=>{setIsOpen(false);localStorage.removeItem("info");   router.push("/login", { scroll: false });}}
                     
                        color="primary"
                     
                      >
                       بلی
                      </Button>
                   
                      <Button
              onClick={()=>setIsOpen(false)}
                       
                        color="primary"
                      >
                       خیر
                      </Button>

              

                  </div>
                </ModalFooter>
              </>
            </ModalContent>
          </Modal>



        </div>
    );
};


export default FloatDropdown;
