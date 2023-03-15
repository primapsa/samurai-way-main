import React, {useState} from "react";
import styles from './Select.module.css'

type SelectPropsType = {
    name: string
    list: SelectListPropsType[]
    onChange: (v: string) => void;
}
type SelectArrowType = {
    isCollapsed: boolean
    onClick: () => void
}
type SelectNameType = {
    isCollapsed: boolean
    name: string
    value: string
}
type SelectListPropsType = {
    name: string
    value: string;
}
type SelectListType = {
    selectItem: SelectListPropsType[]
    onChange: (v: string) => void;
}
type SelectBodyPropsType = {
    isCollapsed: boolean
    name: string
    value: string
    onClick: () => void;
}
const dats = [
    {name: 'user1', value: '1'},
    {name: 'user2', value: '1'},
    {name: 'user3', value: '1'}
]
export const Select = ({name, list, onChange}: SelectPropsType) => {
    const [isCollapsed, setCollapsed] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState<string>('')
    const setCollapsedHandler = () => setCollapsed(!isCollapsed)
    const onChangeHandler = (item: string): void => {
        const filtered = list.find(e => e.value === item)?.name as string
        setSelectValue(filtered);
        setCollapsed(false)
        onChange(item);
    }
    return (
        <>
            <div className={styles.selectWrapper} >
                <SelectBody isCollapsed={isCollapsed} name={name} value={selectValue} onClick={setCollapsedHandler}/>
                {isCollapsed && <SelectList selectItem={list} onChange={onChangeHandler}/>}
            </div>

        </>

    )
}
const SelectBody = ({isCollapsed, name, value, onClick}: SelectBodyPropsType) => {
    return (
        <div className={styles.selctBody}>
            <SelectName isCollapsed={isCollapsed} name={name} value={value}/>
            <SelectArrow isCollapsed={isCollapsed} onClick={onClick}/>
        </div>
    )
}
const SelectArrow = ({isCollapsed, onClick}: SelectArrowType) => {
    const marker = isCollapsed ? 8679 : 8681
    return (
        <div className={styles.listArrow} onClick={onClick}>{String.fromCodePoint(marker)}</div>
    )
}
const SelectName = ({isCollapsed, name, value}: SelectNameType) => {
    const titleToggle = !!value || isCollapsed
    const selectName = value ? value : !isCollapsed ? name : ''
    return (
        <>
            {titleToggle && <div className={styles.selectNameCollapsed}>{name}</div>}
            <div className={styles.selectName}>{selectName}</div>
        </>

    )
}
const SelectList = ({selectItem, onChange}: SelectListType) => {
    const list = selectItem.map((e,i) => <div key={i} data-user={e.value}>{e.name}</div>)
 const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => onChange((e.target as HTMLDivElement).dataset.user as string)
    return (
        <div className={styles.selectList} onClick={onClickHandler}>{list}</div>

    )
}
