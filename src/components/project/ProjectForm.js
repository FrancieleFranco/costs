import{useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submitbutton from '../form/SubmitButton'

function ProjectForm({btnText, handleSubmit , projectData}) {
    const [project, setProject] = useState( projectData || {})

    const [categories, setCategories] = useState([])
    

    useEffect(() =>{ fetch("http://localhost:5000/categories", {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
        },
    })
        .then((res)=> res.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch(((err)=> console.log(err)))},
        []
)
        const submit = (event) =>{
            event.preventDefault()
            console.log(project)
            handleSubmit(project)
        }

    function handleChange(event){
        setProject({...project, [event.target.name]: event.target.value})
    }    

    function handleCategory(event){
        setProject({...project,
            category:{
                id: event.target.value,
                name: event.target.options[event.target.selectedIndex].text,
            }
           })
    }   

    return(
        <form onSubmit={submit} className={styles.form}>
            <div>
               <Input
                    type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    />
            </div>

            <div>
            <Input
                    type="number" 
                    text="Orçamento do projeto" 
                    name="budget" 
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                    />
            </div>

            <div>
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id: ''}
            />    
            
            </div>
            
           <div>
               <Submitbutton text={btnText}/>
           </div>
           
        </form>

    )  
}

export default ProjectForm