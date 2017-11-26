import React from 'react'
import TextField from 'material-ui/TextField'

const styles = {
    container: {
        textAlign: 'center'
    },
    textField: {
        backgroundColor: 'darkseagreen',
        color: 'black'
    }
}

const FeedbackForm = () => {
  return (
   <div style={styles.container}>
       <form>
           <div>
            <TextField
                style={styles.textField}
                id="search"
                label="Name"
                type="search"
                margin="normal"
                />            
            </div>
            <div>
                <TextField
                    style={styles.textField}
                    id="search"
                    label="Email"
                    type="search"
                    margin="normal"
                    />  
            </div>
            <div>
                <TextField
                    style={styles.textField}
                    id="search"
                    label="Message"
                    type="search"
                    margin="normal"
                    />  
            </div>
        </form>
    </div>
  )
}

export default FeedbackForm