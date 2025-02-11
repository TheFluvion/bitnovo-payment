import { View } from "react-native"
import styles from "./CurrenciesSkeleton.styles"
import Skeleton from "@/components/Skeleton"

const SKELETONS_QUANTITY = 4

const CurrenciesSkeleton = () => {
    const skeletonArray = Array.from({ length: SKELETONS_QUANTITY })

    return (
        <View style={styles.container}>
            {
                skeletonArray.map((_, index) => (
                    <Skeleton key={index} style={styles.skeleton} />
                ))
            }
        </View>
    )

}

export default CurrenciesSkeleton
