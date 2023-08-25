import { readdir, writeFile } from "node:fs/promises"
;(async () => {
  const imagesFolderContent = await readdir("./public/img/original")

  const images = imagesFolderContent.filter(fileOrDir =>
    fileOrDir.includes(".")
  )

  const imagesJson = images.map(imgName => {
    return {
      alt: imgName.replace(/[-_]/, "").toLowerCase(),
      src: `/img/original/${imgName}`,
      placeholderSrc: `/img/small/${imgName}`
    }
  })

  await writeFile("./src/assets/images.json", JSON.stringify(imagesJson))
})()
