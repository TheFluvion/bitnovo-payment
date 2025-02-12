import { SelectableActionType } from "../constants/types"

const getSelectableAction = ({
    image,
    label,
    handlePress,
    OptionalComponent,
    rightComponent,
}: SelectableActionType): SelectableActionType => {
    return {
        image,
        label,
        handlePress,
        OptionalComponent,
        rightComponent,
    }
}

export { getSelectableAction }