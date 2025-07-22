export const profile = {
  name: "Van Loc",
  title: "Full Stack Developer | Problem Solver | Team Leader",
  skills: ["NextJS", "Svelte", "NodeJS", "TailwindCSS", "ShadcnUI", "TypeScript"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 4,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    )
  },
}
