import React, { useEffect, useState } from "react"

// internal comps
import { Text } from "../text"

interface columnType {
    label: any
    skeleton?: any
    render: any
    filter?: boolean
    filterFn?: any
    key: string
}

const DefaultColumns: columnType[] = [
    {
        label: (
            <Text variant="Medium" size="Text xs" color="text-Action-Light-Active">
                Status
            </Text>
        ),
        key: "Status",
        render: (Status: "Purchased") => (
            <Text color="text-Action-Light-Active" className="!text-[12px] !font-normal">
                {Status}
            </Text>
        ),
    },
    {
        label: (
            <Text variant="Medium" size="Text xs" color="text-Action-Light-Active">
                Price
            </Text>
        ),
        key: "Price",
        render: (Price: { value: number; unit: "string" }) => (
            <Text color="text-Action-Light-Active" className="text-[12px] !font-bold">
                {Price.value}
                <sub className="!font-normal">{Price.unit}</sub>
            </Text>
        ),
    },
    {
        label: (
            <Text variant="Medium" size="Text xs" color="text-Action-Light-Active">
                Date
            </Text>
        ),
        key: "Date",
        render: (Date: string) => (
            <Text color="text-Action-Light-Active" className="!text-[12px] !font-normal">
                {Date}
            </Text>
        ),
    },
]

interface singleDataType {
    [value: string]: any
}

const defaultData: singleDataType[] = [
    {
        Status: "Purchased",
        Price: {
            value: 100,
            unit: "USD",
        },
        Date: "June 23rd",
    },
    {
        Status: "Purchased",
        Price: {
            value: 100,
            unit: "USD",
        },
        Date: "June 23rd",
    },
    {
        Status: "Purchased",
        Price: {
            value: 100,
            unit: "USD",
        },
        Date: "June 23rd",
    },
]

const Table: React.FC<{ data?: singleDataType[]; columns?: columnType[]; onUserClick?: any }> = ({
    data = defaultData,
    columns = DefaultColumns,
    onUserClick = () => { },
}) => {
    const [skeletonShow, setSkeletonShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSkeletonShow(false)
        }, 2000)
    }, [])

    return (
        <table className="rounded-tr-[10px] rounded-tl-[10px] overflow-hidden w-full">
            <thead>
                <tr
                    className="bg-GREY-200 rounded-tl-[10px] rounded-tr-[10px] py-10"
                >
                    {columns.map(columns => {
                        return (
                            <th className="px-2 py-2" key={columns.key}>
                                {columns.label}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody style={{ userSelect: "text" }}>
                {data.map((row, index) => {
                    return (
                        <tr
                            className="border-t border-dashed h-[64px] w-full"
                            key={index}
                        >
                            {columns.map(columnItem => {
                                return (
                                    <td className="px-2 py-2 mx-auto h-[64px]" key={columnItem.key} onClick={() => {
                                        if (columnItem.key === "action") {
                                            console.log("ttestt")
                                            onUserClick()
                                        }
                                    }}>
                                        <div className="w-full flex items-center justify-center">
                                            {skeletonShow
                                                ? columnItem.skeleton
                                                : columnItem.render(row[columnItem.key])}
                                        </div>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
