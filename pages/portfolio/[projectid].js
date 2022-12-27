import { useRouter } from "next/router";

function ProjectPage() {
  const router = useRouter();

  console.log('router', router);

  const projectId = router.query.projectid;

  return <h1>The Project Page for {projectId}</h1>;
}

export default ProjectPage;