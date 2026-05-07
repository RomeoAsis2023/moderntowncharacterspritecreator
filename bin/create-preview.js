import parseSettings from '../image-server/parseSettings'
import createPreview from '../image-server/createPreview'

async function main () {
  const fullSettings = parseSettings(process.argv[2])
  if (!fullSettings) {
    console.log('Could not parse any settings')
    process.exit(1)
  }

  const { base, ...settings } = fullSettings
  const preview = await createPreview(base, settings)
  console.log(preview)
}

main()
