'use client'

import {useEffect, useRef, useState} from 'react'
import {useAppProvider} from '@/app/app-provider'
import {useSelectedLayoutSegments} from 'next/navigation'
import {Transition} from '@headlessui/react'
import {getBreakpoint} from '../utils/utils'
import SidebarLinkGroup from './sidebar-link-group'
import SidebarLink from './sidebar-link'
import Logo from './logo'

export default function Sidebar() {
    const sidebar = useRef<HTMLDivElement>(null)
    const {sidebarOpen, setSidebarOpen} = useAppProvider()
    const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false)
    const segments = useSelectedLayoutSegments()
    const [breakpoint, setBreakpoint] = useState<string | undefined>(getBreakpoint())
    const expandOnly = !sidebarExpanded && (breakpoint === 'lg' || breakpoint === 'xl')

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}: { target: EventTarget | null }): void => {
            if (!sidebar.current) return
            if (!sidebarOpen || sidebar.current.contains(target as Node)) return
            setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}: { keyCode: number }): void => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    const handleBreakpoint = () => {
        setBreakpoint(getBreakpoint())
    }

    useEffect(() => {
        window.addEventListener('resize', handleBreakpoint)
        return () => {
            window.removeEventListener('resize', handleBreakpoint)
        }
    }, [breakpoint])

    return (<div className={`min-w-fit ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
        {/* Sidebar backdrop (mobile only) */}
        <Transition
            className="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto"
            show={sidebarOpen}
            enter="transition-opacity ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
        />

        {/* Sidebar */}
        <Transition
            show={sidebarOpen}
            unmount={false}
            as="div"
            id="sidebar"
            ref={sidebar}
            className="flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            {/* Sidebar header */}
            <div className="flex justify-between mb-10 pr-3 sm:px-2">
                {/* Close button */}
                <button
                    className="lg:hidden text-slate-500 hover:text-slate-400"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                >
                    <span className="sr-only">Close sidebar</span>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"/>
                    </svg>
                </button>
                {/* Logo */}
                <Logo/>
            </div>

            {/* Links */}
            <div className="space-y-8">
                {/* Pages group */}
                <div>
                    <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                    aria-hidden="true">
                •••
              </span>
                        <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
                    </h3>
                    <ul className="mt-3">
                        {/* Calendar */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${segments.includes('home') && 'bg-slate-900'}`}>
                            <SidebarLink href="/home">
                                <div className="flex items-center">
                                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                        <path
                                            className={`fill-current ${segments.includes('home') ? 'text-indigo-500' : 'text-slate-600'}`}
                                            d="M1 3h22v20H1z"/>
                                        <path
                                            className={`fill-current ${segments.includes('home') ? 'text-indigo-300' : 'text-slate-400'}`}
                                            d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                                        />
                                    </svg>
                                    <span
                                        className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Home
                    </span>
                                </div>
                            </SidebarLink>
                        </li>
                        {/* Campaigns */}


                        {/* Settings */}
                        <SidebarLinkGroup open={segments.includes('settings')}>
                            {(handleClick, open) => {
                                return (<>
                                    <a
                                        href="#0"
                                        className={`block text-slate-200 truncate transition duration-150 ${segments.includes('settings') ? 'hover:text-slate-200' : 'hover:text-white'}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            expandOnly ? setSidebarExpanded(true) : handleClick()
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                                    <path
                                                        className={`fill-current ${segments.includes('settings') ? 'text-indigo-500' : 'text-slate-600'}`}
                                                        d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                                                    />
                                                    <path
                                                        className={`fill-current ${segments.includes('settings') ? 'text-indigo-300' : 'text-slate-400'}`}
                                                        d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                                                    />
                                                    <path
                                                        className={`fill-current ${segments.includes('settings') ? 'text-indigo-500' : 'text-slate-600'}`}
                                                        d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                                                    />
                                                    <path
                                                        className={`fill-current ${segments.includes('settings') ? 'text-indigo-300' : 'text-slate-400'}`}
                                                        d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                                                    />
                                                </svg>
                                                <span
                                                    className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                                            </div>
                                            {/* Icon */}
                                            <div className="flex shrink-0 ml-2">
                                                <svg
                                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/account">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Account
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/notifications">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Notifications
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/apps">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Connected Apps
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/plans">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Plans
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/billing">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Billing & Invoices
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/settings/feedback">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Give Feedback
                              </span>
                                                </SidebarLink>
                                            </li>
                                        </ul>
                                    </div>
                                </>)
                            }}
                        </SidebarLinkGroup>
                        {/* Utility */}
                        <SidebarLinkGroup open={segments.includes('utility')}>
                            {(handleClick, open) => {
                                return (<>
                                    <a
                                        href="#0"
                                        className={`block text-slate-200 truncate transition duration-150 ${segments.includes('utility') ? 'hover:text-slate-200' : 'hover:text-white'}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            expandOnly ? setSidebarExpanded(true) : handleClick()
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                                    <circle
                                                        className={`fill-current ${segments.includes('utility') ? 'text-indigo-300' : 'text-slate-400'}`}
                                                        cx="18.5"
                                                        cy="5.5"
                                                        r="4.5"
                                                    />
                                                    <circle
                                                        className={`fill-current ${segments.includes('utility') ? 'text-indigo-500' : 'text-slate-600'}`}
                                                        cx="5.5"
                                                        cy="5.5"
                                                        r="4.5"
                                                    />
                                                    <circle
                                                        className={`fill-current ${segments.includes('utility') ? 'text-indigo-500' : 'text-slate-600'}`}
                                                        cx="18.5"
                                                        cy="18.5"
                                                        r="4.5"
                                                    />
                                                    <circle
                                                        className={`fill-current ${segments.includes('utility') ? 'text-indigo-300' : 'text-slate-400'}`}
                                                        cx="5.5"
                                                        cy="18.5"
                                                        r="4.5"
                                                    />
                                                </svg>
                                                <span
                                                    className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Utility
                            </span>
                                            </div>
                                            {/* Icon */}
                                            <div className="flex shrink-0 ml-2">
                                                <svg
                                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/changelog">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Changelog
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/roadmap">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Roadmap
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/faqs">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                FAQs
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/empty-state">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Empty State
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/404">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                404
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/utility/knowledge-base">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Knowledge Base
                              </span>
                                                </SidebarLink>
                                            </li>
                                        </ul>
                                    </div>
                                </>)
                            }}
                        </SidebarLinkGroup>
                    </ul>
                </div>
                {/* More group */}
                <div>
                    <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                    aria-hidden="true">
                •••
              </span>
                        <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
                    </h3>
                    <ul className="mt-3">
                        {/* Onboarding */}
                        <SidebarLinkGroup>
                            {(handleClick, open) => {
                                return (<>
                                    <a
                                        href="#0"
                                        className={`block text-slate-200 truncate transition duration-150 ${open ? 'hover:text-slate-200' : 'hover:text-white'}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            expandOnly ? setSidebarExpanded(true) : handleClick()
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                                    <path
                                                        className="fill-current text-slate-600"
                                                        d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
                                                    />
                                                    <path
                                                        className="fill-current text-slate-400"
                                                        d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                                                    />
                                                </svg>
                                                <span
                                                    className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Onboarding
                            </span>
                                            </div>
                                            {/* Icon */}
                                            <div className="flex shrink-0 ml-2">
                                                <svg
                                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/onboarding-01">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 1
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/onboarding-02">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 2
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/onboarding-03">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 3
                              </span>
                                                </SidebarLink>
                                            </li>
                                            <li className="mb-1 last:mb-0">
                                                <SidebarLink href="/onboarding-04">
                              <span
                                  className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 4
                              </span>
                                                </SidebarLink>
                                            </li>
                                        </ul>
                                    </div>
                                </>)
                            }}
                        </SidebarLinkGroup>
                        {/* Components */}
                        {/*<SidebarLinkGroup open={segments.includes('components-library')}>*/}
                        {/*    {(handleClick, open) => {*/}
                        {/*        return (<>*/}
                        {/*            <a*/}
                        {/*                href="#0"*/}
                        {/*                className={`block text-slate-200 truncate transition duration-150 ${segments.includes('components-library') ? 'hover:text-slate-200' : 'hover:text-white'}`}*/}
                        {/*                onClick={(e) => {*/}
                        {/*                    e.preventDefault()*/}
                        {/*                    expandOnly ? setSidebarExpanded(true) : handleClick()*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                <div className="flex items-center justify-between">*/}
                        {/*                    <div className="flex items-center">*/}
                        {/*                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">*/}
                        {/*                            <circle*/}
                        {/*                                className={`fill-current ${segments.includes('components-library') ? 'text-indigo-500' : 'text-slate-600'}`}*/}
                        {/*                                cx="16"*/}
                        {/*                                cy="8"*/}
                        {/*                                r="8"*/}
                        {/*                            />*/}
                        {/*                            <circle*/}
                        {/*                                className={`fill-current ${segments.includes('components-library') ? 'text-indigo-300' : 'text-slate-400'}`}*/}
                        {/*                                cx="8"*/}
                        {/*                                cy="16"*/}
                        {/*                                r="8"*/}
                        {/*                            />*/}
                        {/*                        </svg>*/}
                        {/*                        <span*/}
                        {/*                            className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*      Components*/}
                        {/*    </span>*/}
                        {/*                    </div>*/}
                        {/*                    /!* Icon *!/*/}
                        {/*                    <div className="flex shrink-0 ml-2">*/}
                        {/*                        <svg*/}
                        {/*                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}*/}
                        {/*                            viewBox="0 0 12 12"*/}
                        {/*                        >*/}
                        {/*                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </a>*/}
                        {/*            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">*/}
                        {/*                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/button">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Button*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/form">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Input Form*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/dropdown">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Dropdown*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/alert">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Alert & Banner*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/modal">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Modal*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/pagination">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Pagination*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/tabs">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Tabs*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/breadcrumb">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Breadcrumb*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/badge">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Badge*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/avatar">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Avatar*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/tooltip">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Tooltip*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/accordion">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Accordion*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                    <li className="mb-1 last:mb-0">*/}
                        {/*                        <SidebarLink href="/components-library/icons">*/}
                        {/*      <span*/}
                        {/*          className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
                        {/*        Icons*/}
                        {/*      </span>*/}
                        {/*                        </SidebarLink>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </div>*/}
                        {/*        </>)*/}
                        {/*    }}*/}
                        {/*</SidebarLinkGroup>*/}
                    </ul>
                </div>
            </div>

            {/* Expand / collapse button */}
            <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                <div className="px-3 py-2">
                    <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                        <span className="sr-only">Expand / collapse sidebar</span>
                        <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                            <path className="text-slate-400"
                                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"/>
                            <path className="text-slate-600" d="M3 23H1V1h2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </Transition>
    </div>)
}