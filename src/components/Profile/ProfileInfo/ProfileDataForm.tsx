import React, {FC} from 'react'import {ProfileType} from '../../../redux/profile-reducer'import styles from './ProfileInfo.module.css'import {createField, Input, Textarea} from '../../../common/FormsContfolls/FormsControlls'import {InjectedFormProps, reduxForm} from 'redux-form'const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = (props) => {   const {handleSubmit, profile, error} = props   return (      <form onSubmit={handleSubmit}>         {error && <div className={styles.formSummaryError}> {error} </div>}         <button>Save changes</button>         <div>            <b>Name:</b>            <span className={styles.name}>               {createField('Full name', 'fullName', [], Input)}            </span>         </div>         <div>            <b>About me:</b>            <span>               {createField('About me', 'aboutMe', [], Textarea)}            </span>         </div>         <div>            <b>Looking for a job:</b>            <span>               {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}            </span>         </div>         <div>            <b>My professional skills:</b>            <span>               {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}            </span>         </div>         <div><b>Contacts:</b>            {Object.keys(profile.contacts).map(key => {               return <div key={key}>                  <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b>               </div>            })}         </div>      </form>   )}const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'editProfile'})(ProfileDataForm)export default ProfileDataFormReduxForm// typesexport type ProfileDataFormDataType = {   lookingForAJob: boolean   lookingForAJobDescription: string   fullName: string   aboutMe: string}type ProfileDataFormPropsType = {   initialValues: ProfileType   onSubmit: (formData: ProfileType) => void   profile: ProfileType}