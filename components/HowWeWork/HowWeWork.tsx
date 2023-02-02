import React from 'react'
import styles from './HowWeWork.module.scss'

const HowWeWork = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        <span className={` outline-gradient-text`}>HOW WE </span> WORK ?
      </h1>

      <div className={styles.itemContainer}>
        {howWeWorkData.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.itemHeading}>
              {item.icon}
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <ul>
              {item.points.map((listItem, index) => (
                <li key={index} className="secondary-text">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
const NoteIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgIcon}
  >
    <path
      d="M48.249 20.9653L45.8956 31.5231C43.8784 40.6413 39.8921 44.329 32.3997 43.5712C31.1989 43.4702 29.9022 43.2429 28.5094 42.8893L24.475 41.8789C14.4611 39.3784 11.3632 34.1752 13.7166 23.6174L16.07 13.0342C16.5503 10.8873 17.1266 9.01822 17.8471 7.47748C20.6567 1.36503 25.4355 -0.276745 33.4563 1.71864L37.4666 2.7037C47.5286 5.17899 50.6024 10.4074 48.249 20.9653Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.3962 43.5781C30.9073 44.639 29.0342 45.523 26.7528 46.306L22.9586 47.6194C13.425 50.8524 8.406 48.1498 5.30818 38.1224L2.23436 28.1455C-0.839455 18.118 1.70605 12.8138 11.2397 9.58079L15.0339 8.26737C16.0185 7.93902 16.9551 7.66118 17.8436 7.48438C17.1232 9.02512 16.5468 10.8942 16.0665 13.0411L13.7131 23.6243C11.3597 34.1821 14.4576 39.3853 24.4715 41.8858L28.5059 42.8962C29.8987 43.2498 31.1955 43.4771 32.3962 43.5781Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.5938 16.1484L38.2406 19.2552"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.2266 25.9141L31.1907 27.7832"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LayerIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgIcon}
  >
    <path
      d="M27.7025 1.49323L43.4358 8.2373C47.9692 10.1678 47.9692 13.3597 43.4358 15.2903L27.7025 22.0343C25.9158 22.8065 22.9825 22.8065 21.1958 22.0343L5.4625 15.2903C0.929167 13.3597 0.929167 10.1678 5.4625 8.2373L21.1958 1.49323C22.9825 0.721007 25.9158 0.721007 27.7025 1.49323Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 22.2891C1 24.4513 2.68 26.9481 4.73333 27.8233L22.84 35.597C24.2267 36.189 25.8 36.189 27.16 35.597L45.2667 27.8233C47.32 26.9481 49 24.4513 49 22.2891"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 35.1641C1 37.5579 2.46667 39.7202 4.73333 40.6983L22.84 48.472C24.2267 49.064 25.8 49.064 27.16 48.472L45.2667 40.6983C47.5333 39.7202 49 37.5579 49 35.1641"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const howWeWorkData = [
  {
    icon: <NoteIcon />,
    title: 'RESEARCH & IDEATION',
    points: [
      'Reasearch trends, analyze competitions.',
      'Ideate user flow, information, architecture and many more.',
    ],
  },
  {
    icon: <LayerIcon />,
    title: 'DESIGN & IMPLEMENTATION',
    points: [
      'Brand design & make a design system.',
      'Implement UI and Develop the product.',
    ],
  },
]

export default HowWeWork
