import React, {ChangeEvent, FC, useState} from 'react'

import styles from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfileType} from '../../../redux/profile-reducer'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from './../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
      const {profile, status, updateUserStatus, isOwner, savePhoto, saveProfile} = props

      const [editMode, setEditMode] = useState(false)
      const onEditMode = () => {
         setEditMode(true)
      }

      if (!profile) {
         return <Preloader/>
      }
      const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
         if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0])
         }
      }
      const onSubmit = (formData: ProfileType) => {
         saveProfile(formData)
         setEditMode(false)
      }

   return (
            <div className={styles.descriptionBlock}>
               <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

               <img src={profile.photos.large || userPhoto} className={styles.userPhoto} alt={'profile'}/>
               <div>{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>

               {editMode
                  ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile}/>
                  : <ProfileData profile={profile} isOwner={isOwner} onEditMode={onEditMode}/>
               }

            </div>
      )
   }

// types
type ProfileInfoPropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (file: any) => void
   saveProfile: (formData: ProfileType) => void
}


const ProfileData: FC<ProfileDataPropsType> = (props) => {
   const {profile, isOwner, onEditMode} = props

   return (
      <>
         {isOwner && <div><button onClick={onEditMode}>Редактировать</button></div>}

         <div><b>Name:</b><span className={styles.name}> {profile.fullName}</span></div>
         <div><b>About me:</b><span>{profile.aboutMe}</span></div>
         <div><b>Looking for a job:</b><span>{profile.lookingForAJob ? 'Yes!' : 'No :)'}</span></div>

         {profile.lookingForAJob &&
         <div>
             <b>My professional skills:</b>
             <span>{profile.lookingForAJobDescription}</span>
         </div>}

         <div><b>Contacts:</b>
            <span>{Object.keys(profile.contacts).map(key => {
               // @ts-ignore
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
                  </span>
         </div>
      </>
   )
}
//types
type ProfileDataPropsType = {
   profile: ProfileType
   isOwner: boolean
   onEditMode: () => void
}

const Contact: FC<ContactPropsType> = (props) => {
   const {contactTitle, contactValue} = props
   return (
      <div className={styles.contacts}>
         <b>{contactTitle} : </b>
         {contactValue}
      </div>
   )
}
//types
type ContactPropsType = {
   contactTitle: string | null
   contactValue: any | null
}


