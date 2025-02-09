import { useState } from 'react';

interface UseInternalNavigationHistoryProps {
  flowSteps: string[];
}

const useStepNavigation = ({
  flowSteps,
}: UseInternalNavigationHistoryProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = (): void => {
    const nextStep = currentStep + 1;
    if (currentStep > flowSteps.length - 1) return

    setCurrentStep(nextStep);
  };

  const goBack = () => {
    const prevStep = currentStep - 1;
    if (prevStep < 0) return

    setCurrentStep(prevStep);
  };

  const goFinalStep = () => {
    setCurrentStep(flowSteps.length - 1);
  };

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  }

  return {
    currentStep,
    goToNextStep,
    goBack,
    goFinalStep,
    handleCurrentStep,
  };
};

export default useStepNavigation;
