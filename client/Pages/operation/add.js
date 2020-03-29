import React, { Component } from 'react'
import axios from 'axios'
import Router from 'next/router'

export default class Add extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:null,
            content:null
        }

    }

    setTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    setContent = (e) => {
        this.setState({
            content:e.target.value
        })
    }


    saveArticle = () => {
        if(this.state.title === null){
            console.error('标题为空')
            return false
        }
        if(this.state.content === null){
            console.error('内容为空')
            return false
        }
        axios.post('http://localhost:8000/blogs/add',{
            title:this.state.title,
            author:'feline',
            content:this.state.content
        }).then((res)=>{
            console.log(res)
            const id = res.data.message._id
            Router.push(`/blog/${id}`)
        }).catch((err)=>{
            console.error(err)
        })
    }


    render(){
        return(
            <div>
            <h1>添加博客</h1>
            <h3>标题</h3>
            <input type="text" onChange={this.setTitle}/>
            <h3>内容</h3>
            <textarea onChange={this.setContent}/> 
            <input type="button" onClick={this.saveArticle} value="添加"/>
        </div>
        )
    }
}