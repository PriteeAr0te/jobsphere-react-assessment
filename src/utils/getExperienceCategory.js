export const getExperienceCategory = (rawLevel) => {
  const level = rawLevel.toLowerCase();

  if (level.includes('fresher') || level.includes('0')) return 'Fresher'
  if (level.includes('junior')) return 'Junior'
  if (level.includes('mid')) return 'Mid-level'
  if (level.includes('senior')) return 'Senior'
  if (level.includes('expert') || level.includes('8+')) return 'Expert'
  if (level.includes('5+')) return 'Senior'
  if (level.includes('8+')) return 'Expert'
  if (level.includes('1-3') || level.includes('2-4')) return 'Junior'
  if (level.includes('3-5')) return 'Mid-level'

  return 'N/A';
}
