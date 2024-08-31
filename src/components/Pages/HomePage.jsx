import { Flex, Text, Button, Heading, Box, Badge, Link } from '@radix-ui/themes';
import { IconBrandGithub } from '@tabler/icons-react';

export const HomePage = () => {
    return (
        <div>
            <Flex p={'8'} height={'100vh'} direction='column' align={'center'} justify={'between'} gap='2'>
                <Box></Box>
                <Flex direction='column' align={'center'} justify={'between'} gap='2'>
                    <Heading>React-Js Radix UI Template</Heading>
                    <Flex mt={'2'} gap='2' wrap={'wrap'}>
                        <Badge color='sky'>Vite</Badge>
                        <Badge color='green'>Minimal Folder Structure</Badge>
                        <Badge color='violet'>Prettier</Badge>
                        <Badge color='tomato'>Eslint</Badge>
                        <Badge color='yellow'>Husky</Badge>
                        <Badge color='orange'>React Router Dom</Badge>
                        <Badge color='blue'>Tabler Icons </Badge>
                    </Flex>
                    <a target='_blank' href='https://github.com/muhdfarseen/ReactJS-RadixUI-Template'>
                        <Button radius='large' mt={'4'} variant='classic' color='red'>
                            <IconBrandGithub size={18} /> Star on GitHub
                        </Button>
                    </a>
                </Flex>

                <Text>
                    A starter template Made with ❤️ From{' '}
                    <Link color='gray' target='_blank' href='https://github.com/muhdfarseen'>
                        muhdfarseen
                    </Link>
                </Text>
            </Flex>
        </div>
    );
};
