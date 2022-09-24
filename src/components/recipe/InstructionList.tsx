import { Box, Typography } from "@mui/material";
import { Instruction } from "../../models/instruction";

type InstructionListProps = {
    instructions: Instruction[];
}

const InstructionList = (params: InstructionListProps) => {
    return (
        <Box>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>Instructions</Typography>
        <ol>
            {params.instructions.map((instruction) => (
                <li key={instruction.id}>{instruction.text}</li>
            ))}
        </ol>
        </Box>
    )
}

export default InstructionList