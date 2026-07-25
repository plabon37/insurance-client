import WorkingProcessSection from "./WorkingProcessSection";

async function getWorkingProcess() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/working-process`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch working process");
    }

    const result = await res.json();

    if (!result.success || !result.data?.length) {
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

    return {
      badge: workingProcess.badge,
      heading: workingProcess.heading,
      description: workingProcess.description,
      backgroundImage: workingProcess.backgroundImage,
      steps,
    };
  } catch (error) {
    console.error("Working Process fetch error:", error);
    return null;
  }
}

export default async function WorkingProcess() {
  const data = await getWorkingProcess();

  if (!data) {
    return null;
  }

  return (
    <WorkingProcessSection
      badge={data.badge}
      heading={data.heading}
      description={data.description}
      backgroundImage={data.backgroundImage}
      steps={data.steps}
    />
  );
}