import { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, ViewStyle } from 'react-native';

interface Props {
    style: ViewStyle
}

const Skeleton = ({ style }: Props) => {
    const opacityAnimation = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        startAnimations();
    }, []);

    const startAnimations = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacityAnimation, {
                    toValue: 0.4,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.ease,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.ease,
                }),
            ])
        ).start();
    };

    return <Animated.View style={[styles.skeleton, style, { opacity: opacityAnimation }]} />;
};

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: '#a5a8a6',
        borderRadius: 8,
    },
});

export default Skeleton;
