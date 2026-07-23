import WorkingProcessSection from "./WorkingProcessSection";

export default async function WorkingProcess() {
  const res = await fetch(
    "http://localhost:3000/api/working-process",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const result = await res.json();

  if (!result.success || !result.data.length) {
    return null;
  }

  const workingProcess = result.data.find(
    (item: any) => item.isActive
  );

  if (!workingProcess) {
    return null;
  }

  const steps = workingProcess.steps
    .filter((step: any) => step.isActive)
    .sort(
      (a: any, b: any) =>
        a.displayOrder - b.displayOrder
    );

  if (!steps.length) {
    return null;
  }

  return (
    <WorkingProcessSection
      badge={workingProcess.badge}
      heading={workingProcess.heading}
      description={workingProcess.description}
      backgroundImage={workingProcess.backgroundImage}
      steps={steps}
    />
  );
}