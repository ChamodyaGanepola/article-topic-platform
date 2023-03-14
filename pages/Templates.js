

import Image from 'next/legacy/image'
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function Templates() {
    const router = useRouter();
    const handleCreateButtonClick = () => {
        console.log('Button 1 clicked');
        router.push('/createTemplates');
    };

    const handleEditButtonClick = () => {
        router.push('/editTemplates');
    };

    return (

        <Box sx={{
            padding: '20px',
            marginTop: '10px',
            marginLeft: '260px',
            marginRight: '260px',
            color: 'white',
            backgroundImage: 'url("/templates.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            /*when the screen width is 600px or less. We've set the height to 300px and changed the backgroundSize to contain, which will scale the image down to fit within the Box component.*/
            height: '500px',
            '@media screen and (max-width: 600px)': {
                height: '300px',
                backgroundSize: 'contain',
                backgroundPosition: 'top',
            },
        }}>


            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '500px',
                    flexDirection: 'column'
                }}
            >
                <Button variant="contained" color="secondary" onClick={handleCreateButtonClick} sx={{ width: '250px', marginRight: '10px' }} >
                    Create Templates
                </Button>
                <Box sx={{ my: 2 }} />
                <Button variant="contained" color="secondary" onClick={handleEditButtonClick} sx={{ width: '250px' }} >
                    Edit Templates
                </Button>
            </Box>



        </Box>
    )

}

export default Templates

