import React from 'react'
import styles from './HowWeWork.module.scss'

const HowWeWork = ({
  data,
  title,
}: {
  data: any
  title: { mainText: string; text: string }
}) => {
  return (
    <section className={`section-margin ${styles.container}`}>
      <h1 className={styles.heading}>
        <span className={` outline-gradient-text`}>{title.mainText} </span>{' '}
        {title.text}
      </h1>

      <div className={styles.itemContainer}>
        {data.map(
          (item: { icon: any; title: string; points: [] }, index: any) => (
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
          )
        )}
      </div>
    </section>
  )
}
export const NoteIcon = () => (
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

export const LayerIcon = () => (
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

export const DesignTools = () => (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgIcon}
  >
    <g clip-path="url(#clip0_823_203)">
      <path
        d="M43.6191 8.79772C40.5391 16.4777 32.8191 26.9177 26.3591 32.0977L22.4191 35.2577C21.9191 35.6177 21.4191 35.9377 20.8591 36.1577C20.8591 35.7977 20.8391 35.3977 20.7791 35.0177C20.5591 33.3377 19.7991 31.7777 18.4591 30.4377C17.0991 29.0777 15.4391 28.2777 13.7391 28.0577C13.3391 28.0377 12.9391 27.9977 12.5391 28.0377C12.7591 27.4177 13.0991 26.8377 13.5191 26.3577L16.6391 22.4177C21.7991 15.9577 32.2791 8.19772 39.9391 5.13772C41.1191 4.69772 42.2591 5.01772 42.9791 5.75772C43.7391 6.49772 44.0991 7.63772 43.6191 8.79772Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.8586 36.1517C20.8586 38.3517 20.0186 40.4517 18.4386 42.0517C17.2186 43.2717 15.5586 44.1117 13.5786 44.3717L8.65859 44.9117C5.97859 45.2117 3.67859 42.9317 3.99859 40.2117L4.53859 35.2917C5.01859 30.9117 8.6786 28.1117 12.5586 28.0317C12.9586 28.0117 13.3786 28.0317 13.7586 28.0517C15.4586 28.2717 17.1186 29.0517 18.4786 30.4317C19.8186 31.7717 20.5786 33.3317 20.7986 35.0117C20.8186 35.3917 20.8586 35.7717 20.8586 36.1517Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.4834 29.8506C28.4834 24.6306 24.2434 20.3906 19.0234 20.3906"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.2375 26.375L41.7175 27.835C44.6975 30.815 44.6975 33.755 41.7175 36.735L35.7975 42.655C32.8575 45.595 29.8775 45.595 26.9375 42.655"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M6.22062 21.9313C3.28062 18.9513 3.28062 16.0113 6.22062 13.0313L12.1406 7.11125C15.0806 4.17125 18.0606 4.17125 21.0006 7.11125L22.4806 8.59125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22.5016 8.61719L15.1016 16.0172"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M40.2403 26.375L34.3203 32.275"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_823_203">
        <rect
          width="48"
          height="48"
          fill="white"
          transform="translate(0 0.914062)"
        />
      </clipPath>
    </defs>
  </svg>
)

export const DocumentCode = () => (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svgIcon}
  >
    <path
      d="M22 44.9141H32C39 44.9141 42 40.9141 42 34.9141V14.9141C42 8.91406 39 4.91406 32 4.91406H16C9 4.91406 6 8.91406 6 14.9141V28.9141"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29 9.91406V13.9141C29 16.1141 30.8 17.9141 33 17.9141H37"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 34.9141L4 38.9141L8 42.9141"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 34.9141L18 38.9141L14 42.9141"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default HowWeWork
