export const employmentSectionFragment = `
  _type == "employmentSection" => {
    title,
    jobs[]{
      jobTitle,
      description,
      startDate,
      endDate
    }
  }
`
