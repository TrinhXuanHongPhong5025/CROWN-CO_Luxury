export interface Student {
    SID: string;
    SNAME: string;
    EMAIL: string;
    Tutor_Id: string | null;
}

export interface CreateStudentInput {
    SID: string;
    SNAME: string;
    EMAIL: string;
    Tutor_Id?: string;
}