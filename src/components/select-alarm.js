const { Select, SelectItem } = require("@nextui-org/react")

const SelectAlarm = () => {
    return (
        <Select className="p-0" fullWidth size="sm" variant="faded" defaultSelectedKeys={"1"}>
            <SelectItem key={"1"} value="پیشفرض">پیشفرض</SelectItem>
            <SelectItem key={"2"} value="صدای آژیر">صدای آژیر</SelectItem>
            <SelectItem key={"3"} value=">صدای زنگ">صدای زنگ</SelectItem>
            <SelectItem key={"4"} value="صدای کوتاه">صدای کوتاه</SelectItem>
        </Select>
    )
}

export default SelectAlarm;