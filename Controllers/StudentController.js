import StudentModel from "../models/Student.js"

class StudentController {
//create
    static createDoc= async(req, res) => {
        try{
            
            const {name, Age, Fees} = req.body
           // put data in model
           const data = new StudentModel({
            name: name,
            age: Age,
            fees: Fees
           })

           //Saving a data
           const result = await data.save()
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
         
    }


//Read
    static getAllDoc = async (req, res) => {
        try{
            const result = await StudentModel.find()
            res.render("index", {data: result})
        } catch (error){
            console.log(error)
        } 
    

    }
    //show edit form with data
    static editDoc = async (req, res) => {
        try{
            const result = await StudentModel.findById(req.params.id)
            
            res.render("edit", {data: result})
        }catch (error) {
            console.log(error)
        }
        

    }
   //Update data
    static updateDocId = async (req, res) => {
        // console.log (req.params.id )
        // console.log (req.body )

        try{
            const { name, Age, Fees} = req.body
            req.body.age = Age
            req.body.fees = Fees
            console.log(req.body)
            const result = await StudentModel.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        console.log(result)
        res.redirect("/student")
        
        }catch (error)  {
            console.log(error)
        }
    }
   //Delete student details
    static deleteDocId = async (req, res) => {
        // console.log(req.params.id)
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)

        }
        
    }

}

export default StudentController