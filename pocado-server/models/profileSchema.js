// const mongoose = require("mongoose");

// const profileSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     pfp: String,
//     _birthday: String,
//     get birthday_72() {
//       return this._birthday;
//     },
//     set birthday_72(value) {
//       this._birthday = value;
//     },
//     get birthday_71() {
//       return this._birthday;
//     },
//     set birthday_71(value) {
//       this._birthday = value;
//     },
//     get birthday_71() {
//       return this._birthday;
//     },
//     set birthday_71(value) {
//       this._birthday = value;
//     },
//     get birthday_70() {
//       return this._birthday;
//     },
//     set birthday_70(value) {
//       this._birthday = value;
//     },
//     get birthday_70() {
//       return this._birthday;
//     },
//     set birthday_70(value) {
//       this._birthday = value;
//     },
//     get birthday_69() {
//       return this._birthday;
//     },
//     set birthday_69(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_67() {
//       return this._birthday;
//     },
//     set birthday_67(value) {
//       this._birthday = value;
//     },
//     get birthday_67() {
//       return this._birthday;
//     },
//     set birthday_67(value) {
//       this._birthday = value;
//     },
//     get birthday_66() {
//       return this._birthday;
//     },
//     set birthday_66(value) {
//       this._birthday = value;
//     },
//     get birthday_65() {
//       return this._birthday;
//     },
//     set birthday_65(value) {
//       this._birthday = value;
//     },
//     get birthday_64() {
//       return this._birthday;
//     },
//     set birthday_64(value) {
//       this._birthday = value;
//     },
//     get birthday_64() {
//       return this._birthday;
//     },
//     set birthday_64(value) {
//       this._birthday = value;
//     },
//     get birthday_63() {
//       return this._birthday;
//     },
//     set birthday_63(value) {
//       this._birthday = value;
//     },
//     get birthday_63() {
//       return this._birthday;
//     },
//     set birthday_63(value) {
//       this._birthday = value;
//     },
//     get birthday_62() {
//       return this._birthday;
//     },
//     set birthday_62(value) {
//       this._birthday = value;
//     },
//     get birthday_62() {
//       return this._birthday;
//     },
//     set birthday_62(value) {
//       this._birthday = value;
//     },
//     get birthday_61() {
//       return this._birthday;
//     },
//     set birthday_61(value) {
//       this._birthday = value;
//     },
//     get birthday_61() {
//       return this._birthday;
//     },
//     set birthday_61(value) {
//       this._birthday = value;
//     },
//     get birthday_60() {
//       return this._birthday;
//     },
//     set birthday_60(value) {
//       this._birthday = value;
//     },
//     get birthday_60() {
//       return this._birthday;
//     },
//     set birthday_60(value) {
//       this._birthday = value;
//     },
//     get birthday_59() {
//       return this._birthday;
//     },
//     set birthday_59(value) {
//       this._birthday = value;
//     },
//     get birthday_59() {
//       return this._birthday;
//     },
//     set birthday_59(value) {
//       this._birthday = value;
//     },
//     get birthday_58() {
//       return this._birthday;
//     },
//     set birthday_58(value) {
//       this._birthday = value;
//     },
//     get birthday_57() {
//       return this._birthday;
//     },
//     set birthday_57(value) {
//       this._birthday = value;
//     },
//     get birthday_57() {
//       return this._birthday;
//     },
//     set birthday_57(value) {
//       this._birthday = value;
//     },
//     get birthday_56() {
//       return this._birthday;
//     },
//     set birthday_56(value) {
//       this._birthday = value;
//     },
//     get birthday_56() {
//       return this._birthday;
//     },
//     set birthday_56(value) {
//       this._birthday = value;
//     },
//     get birthday_55() {
//       return this._birthday;
//     },
//     set birthday_55(value) {
//       this._birthday = value;
//     },
//     get birthday_55() {
//       return this._birthday;
//     },
//     set birthday_55(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_53() {
//       return this._birthday;
//     },
//     set birthday_53(value) {
//       this._birthday = value;
//     },
//     get birthday_53() {
//       return this._birthday;
//     },
//     set birthday_53(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_51() {
//       return this._birthday;
//     },
//     set birthday_51(value) {
//       this._birthday = value;
//     },
//     get birthday_51() {
//       return this._birthday;
//     },
//     set birthday_51(value) {
//       this._birthday = value;
//     },
//     get birthday_50() {
//       return this._birthday;
//     },
//     set birthday_50(value) {
//       this._birthday = value;
//     },
//     get birthday_49() {
//       return this._birthday;
//     },
//     set birthday_49(value) {
//       this._birthday = value;
//     },
//     get birthday_49() {
//       return this._birthday;
//     },
//     set birthday_49(value) {
//       this._birthday = value;
//     },
//     get birthday_48() {
//       return this._birthday;
//     },
//     set birthday_48(value) {
//       this._birthday = value;
//     },
//     get birthday_48() {
//       return this._birthday;
//     },
//     set birthday_48(value) {
//       this._birthday = value;
//     },
//     get birthday_47() {
//       return this._birthday;
//     },
//     set birthday_47(value) {
//       this._birthday = value;
//     },
//     get birthday_47() {
//       return this._birthday;
//     },
//     set birthday_47(value) {
//       this._birthday = value;
//     },
//     get birthday_46() {
//       return this._birthday;
//     },
//     set birthday_46(value) {
//       this._birthday = value;
//     },
//     get birthday_46() {
//       return this._birthday;
//     },
//     set birthday_46(value) {
//       this._birthday = value;
//     },
//     get birthday_45() {
//       return this._birthday;
//     },
//     set birthday_45(value) {
//       this._birthday = value;
//     },
//     get birthday_45() {
//       return this._birthday;
//     },
//     set birthday_45(value) {
//       this._birthday = value;
//     },
//     get birthday_44() {
//       return this._birthday;
//     },
//     set birthday_44(value) {
//       this._birthday = value;
//     },
//     get birthday_44() {
//       return this._birthday;
//     },
//     set birthday_44(value) {
//       this._birthday = value;
//     },
//     get birthday_43() {
//       return this._birthday;
//     },
//     set birthday_43(value) {
//       this._birthday = value;
//     },
//     get birthday_43() {
//       return this._birthday;
//     },
//     set birthday_43(value) {
//       this._birthday = value;
//     },
//     get birthday_42() {
//       return this._birthday;
//     },
//     set birthday_42(value) {
//       this._birthday = value;
//     },
//     get birthday_42() {
//       return this._birthday;
//     },
//     set birthday_42(value) {
//       this._birthday = value;
//     },
//     get birthday_41() {
//       return this._birthday;
//     },
//     set birthday_41(value) {
//       this._birthday = value;
//     },
//     get birthday_41() {
//       return this._birthday;
//     },
//     set birthday_41(value) {
//       this._birthday = value;
//     },
//     get birthday_40() {
//       return this._birthday;
//     },
//     set birthday_40(value) {
//       this._birthday = value;
//     },
//     get birthday_40() {
//       return this._birthday;
//     },
//     set birthday_40(value) {
//       this._birthday = value;
//     },
//     get birthday_39() {
//       return this._birthday;
//     },
//     set birthday_39(value) {
//       this._birthday = value;
//     },
//     get birthday_39() {
//       return this._birthday;
//     },
//     set birthday_39(value) {
//       this._birthday = value;
//     },
//     get birthday_38() {
//       return this._birthday;
//     },
//     set birthday_38(value) {
//       this._birthday = value;
//     },
//     get birthday_38() {
//       return this._birthday;
//     },
//     set birthday_38(value) {
//       this._birthday = value;
//     },
//     get birthday_37() {
//       return this._birthday;
//     },
//     set birthday_37(value) {
//       this._birthday = value;
//     },
//     get birthday_37() {
//       return this._birthday;
//     },
//     set birthday_37(value) {
//       this._birthday = value;
//     },
//     get birthday_36() {
//       return this._birthday;
//     },
//     set birthday_36(value) {
//       this._birthday = value;
//     },
//     get birthday_36() {
//       return this._birthday;
//     },
//     set birthday_36(value) {
//       this._birthday = value;
//     },
//     get birthday_35() {
//       return this._birthday;
//     },
//     set birthday_35(value) {
//       this._birthday = value;
//     },
//     get birthday_35() {
//       return this._birthday;
//     },
//     set birthday_35(value) {
//       this._birthday = value;
//     },
//     get birthday_34() {
//       return this._birthday;
//     },
//     set birthday_34(value) {
//       this._birthday = value;
//     },
//     get birthday_34() {
//       return this._birthday;
//     },
//     set birthday_34(value) {
//       this._birthday = value;
//     },
//     get birthday_33() {
//       return this._birthday;
//     },
//     set birthday_33(value) {
//       this._birthday = value;
//     },
//     get birthday_33() {
//       return this._birthday;
//     },
//     set birthday_33(value) {
//       this._birthday = value;
//     },
//     get birthday_32() {
//       return this._birthday;
//     },
//     set birthday_32(value) {
//       this._birthday = value;
//     },
//     get birthday_32() {
//       return this._birthday;
//     },
//     set birthday_32(value) {
//       this._birthday = value;
//     },
//     get birthday_31() {
//       return this._birthday;
//     },
//     set birthday_31(value) {
//       this._birthday = value;
//     },
//     get birthday_31() {
//       return this._birthday;
//     },
//     set birthday_31(value) {
//       this._birthday = value;
//     },
//     get birthday_30() {
//       return this._birthday;
//     },
//     set birthday_30(value) {
//       this._birthday = value;
//     },
//     get birthday_30() {
//       return this._birthday;
//     },
//     set birthday_30(value) {
//       this._birthday = value;
//     },
//     get birthday_29() {
//       return this._birthday;
//     },
//     set birthday_29(value) {
//       this._birthday = value;
//     },
//     get birthday_29() {
//       return this._birthday;
//     },
//     set birthday_29(value) {
//       this._birthday = value;
//     },
//     get birthday_28() {
//       return this._birthday;
//     },
//     set birthday_28(value) {
//       this._birthday = value;
//     },
//     get birthday_28() {
//       return this._birthday;
//     },
//     set birthday_28(value) {
//       this._birthday = value;
//     },
//     get birthday_27() {
//       return this._birthday;
//     },
//     set birthday_27(value) {
//       this._birthday = value;
//     },
//     get birthday_27() {
//       return this._birthday;
//     },
//     set birthday_27(value) {
//       this._birthday = value;
//     },
//     get birthday_26() {
//       return this._birthday;
//     },
//     set birthday_26(value) {
//       this._birthday = value;
//     },
//     get birthday_26() {
//       return this._birthday;
//     },
//     set birthday_26(value) {
//       this._birthday = value;
//     },
//     get birthday_25() {
//       return this._birthday;
//     },
//     set birthday_25(value) {
//       this._birthday = value;
//     },
//     get birthday_25() {
//       return this._birthday;
//     },
//     set birthday_25(value) {
//       this._birthday = value;
//     },
//     get birthday_24() {
//       return this._birthday;
//     },
//     set birthday_24(value) {
//       this._birthday = value;
//     },
//     get birthday_24() {
//       return this._birthday;
//     },
//     set birthday_24(value) {
//       this._birthday = value;
//     },
//     get birthday_23() {
//       return this._birthday;
//     },
//     set birthday_23(value) {
//       this._birthday = value;
//     },
//     get birthday_23() {
//       return this._birthday;
//     },
//     set birthday_23(value) {
//       this._birthday = value;
//     },
//     get birthday_22() {
//       return this._birthday;
//     },
//     set birthday_22(value) {
//       this._birthday = value;
//     },
//     get birthday_21() {
//       return this._birthday;
//     },
//     set birthday_21(value) {
//       this._birthday = value;
//     },
//     get birthday_21() {
//       return this._birthday;
//     },
//     set birthday_21(value) {
//       this._birthday = value;
//     },
//     get birthday_20() {
//       return this._birthday;
//     },
//     set birthday_20(value) {
//       this._birthday = value;
//     },
//     get birthday_20() {
//       return this._birthday;
//     },
//     set birthday_20(value) {
//       this._birthday = value;
//     },
//     get birthday_19() {
//       return this._birthday;
//     },
//     set birthday_19(value) {
//       this._birthday = value;
//     },
//     get birthday_19() {
//       return this._birthday;
//     },
//     set birthday_19(value) {
//       this._birthday = value;
//     },
//     get birthday_18() {
//       return this._birthday;
//     },
//     set birthday_18(value) {
//       this._birthday = value;
//     },
//     get birthday_18() {
//       return this._birthday;
//     },
//     set birthday_18(value) {
//       this._birthday = value;
//     },
//     get birthday_17() {
//       return this._birthday;
//     },
//     set birthday_17(value) {
//       this._birthday = value;
//     },
//     get birthday_16() {
//       return this._birthday;
//     },
//     set birthday_16(value) {
//       this._birthday = value;
//     },
//     get birthday_16() {
//       return this._birthday;
//     },
//     set birthday_16(value) {
//       this._birthday = value;
//     },
//     get birthday_15() {
//       return this._birthday;
//     },
//     set birthday_15(value) {
//       this._birthday = value;
//     },
//     get birthday_15() {
//       return this._birthday;
//     },
//     set birthday_15(value) {
//       this._birthday = value;
//     },
//     get birthday_14() {
//       return this._birthday;
//     },
//     set birthday_14(value) {
//       this._birthday = value;
//     },
//     get birthday_14() {
//       return this._birthday;
//     },
//     set birthday_14(value) {
//       this._birthday = value;
//     },
//     get birthday_13() {
//       return this._birthday;
//     },
//     set birthday_13(value) {
//       this._birthday = value;
//     },
//     get birthday_13() {
//       return this._birthday;
//     },
//     set birthday_13(value) {
//       this._birthday = value;
//     },
//     get birthday_12() {
//       return this._birthday;
//     },
//     set birthday_12(value) {
//       this._birthday = value;
//     },
//     get birthday_11() {
//       return this._birthday;
//     },
//     set birthday_11(value) {
//       this._birthday = value;
//     },
//     get birthday_11() {
//       return this._birthday;
//     },
//     set birthday_11(value) {
//       this._birthday = value;
//     },
//     get birthday_10() {
//       return this._birthday;
//     },
//     set birthday_10(value) {
//       this._birthday = value;
//     },
//     get birthday_10() {
//       return this._birthday;
//     },
//     set birthday_10(value) {
//       this._birthday = value;
//     },
//     get birthday_9() {
//       return this._birthday;
//     },
//     set birthday_9(value) {
//       this._birthday = value;
//     },
//     get birthday_9() {
//       return this._birthday;
//     },
//     set birthday_9(value) {
//       this._birthday = value;
//     },
//     get birthday_8() {
//       return this._birthday;
//     },
//     set birthday_8(value) {
//       this._birthday = value;
//     },
//     get birthday_8() {
//       return this._birthday;
//     },
//     set birthday_8(value) {
//       this._birthday = value;
//     },
//     get birthday_7() {
//       return this._birthday;
//     },
//     set birthday_7(value) {
//       this._birthday = value;
//     },
//     get birthday_7() {
//       return this._birthday;
//     },
//     set birthday_7(value) {
//       this._birthday = value;
//     },
//     get birthday_6() {
//       return this._birthday;
//     },
//     set birthday_6(value) {
//       this._birthday = value;
//     },
//     get birthday_6() {
//       return this._birthday;
//     },
//     set birthday_6(value) {
//       this._birthday = value;
//     },
//     get birthday_5() {
//       return this._birthday;
//     },
//     set birthday_5(value) {
//       this._birthday = value;
//     },
//     get birthday_5() {
//       return this._birthday;
//     },
//     set birthday_5(value) {
//       this._birthday = value;
//     },
//     get birthday_4() {
//       return this._birthday;
//     },
//     set birthday_4(value) {
//       this._birthday = value;
//     },
//     get birthday_4() {
//       return this._birthday;
//     },
//     set birthday_4(value) {
//       this._birthday = value;
//     },
//     get birthday_3() {
//       return this._birthday;
//     },
//     set birthday_3(value) {
//       this._birthday = value;
//     },
//     get birthday_3() {
//       return this._birthday;
//     },
//     set birthday_3(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_1() {
//       return this._birthday;
//     },
//     set birthday_1(value) {
//       this._birthday = value;
//     },
//     get birthday_1() {
//       return this._birthday;
//     },
//     set birthday_1(value) {
//       this._birthday = value;
//     },
//     get birthday() {
//       return this._birthday;
//     },
//     set birthday(value) {
//       this._birthday = value;
//     },
//     bio: String,
//     city: String,
//     country: String,
//     following: Number,
//     followers: Number,
//   },
//   {
//     timestamps: true,
//   }
// );
// exports.profileSchema = profileSchema;
// const mongoose = require("mongoose");

// const profileSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     pfp: String,
//     _birthday: String,
//     get birthday_72() {
//       return this._birthday;
//     },
//     set birthday_72(value) {
//       this._birthday = value;
//     },
//     get birthday_71() {
//       return this._birthday;
//     },
//     set birthday_71(value) {
//       this._birthday = value;
//     },
//     get birthday_71() {
//       return this._birthday;
//     },
//     set birthday_71(value) {
//       this._birthday = value;
//     },
//     get birthday_70() {
//       return this._birthday;
//     },
//     set birthday_70(value) {
//       this._birthday = value;
//     },
//     get birthday_70() {
//       return this._birthday;
//     },
//     set birthday_70(value) {
//       this._birthday = value;
//     },
//     get birthday_69() {
//       return this._birthday;
//     },
//     set birthday_69(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_68() {
//       return this._birthday;
//     },
//     set birthday_68(value) {
//       this._birthday = value;
//     },
//     get birthday_67() {
//       return this._birthday;
//     },
//     set birthday_67(value) {
//       this._birthday = value;
//     },
//     get birthday_67() {
//       return this._birthday;
//     },
//     set birthday_67(value) {
//       this._birthday = value;
//     },
//     get birthday_66() {
//       return this._birthday;
//     },
//     set birthday_66(value) {
//       this._birthday = value;
//     },
//     get birthday_65() {
//       return this._birthday;
//     },
//     set birthday_65(value) {
//       this._birthday = value;
//     },
//     get birthday_64() {
//       return this._birthday;
//     },
//     set birthday_64(value) {
//       this._birthday = value;
//     },
//     get birthday_64() {
//       return this._birthday;
//     },
//     set birthday_64(value) {
//       this._birthday = value;
//     },
//     get birthday_63() {
//       return this._birthday;
//     },
//     set birthday_63(value) {
//       this._birthday = value;
//     },
//     get birthday_63() {
//       return this._birthday;
//     },
//     set birthday_63(value) {
//       this._birthday = value;
//     },
//     get birthday_62() {
//       return this._birthday;
//     },
//     set birthday_62(value) {
//       this._birthday = value;
//     },
//     get birthday_62() {
//       return this._birthday;
//     },
//     set birthday_62(value) {
//       this._birthday = value;
//     },
//     get birthday_61() {
//       return this._birthday;
//     },
//     set birthday_61(value) {
//       this._birthday = value;
//     },
//     get birthday_61() {
//       return this._birthday;
//     },
//     set birthday_61(value) {
//       this._birthday = value;
//     },
//     get birthday_60() {
//       return this._birthday;
//     },
//     set birthday_60(value) {
//       this._birthday = value;
//     },
//     get birthday_60() {
//       return this._birthday;
//     },
//     set birthday_60(value) {
//       this._birthday = value;
//     },
//     get birthday_59() {
//       return this._birthday;
//     },
//     set birthday_59(value) {
//       this._birthday = value;
//     },
//     get birthday_59() {
//       return this._birthday;
//     },
//     set birthday_59(value) {
//       this._birthday = value;
//     },
//     get birthday_58() {
//       return this._birthday;
//     },
//     set birthday_58(value) {
//       this._birthday = value;
//     },
//     get birthday_57() {
//       return this._birthday;
//     },
//     set birthday_57(value) {
//       this._birthday = value;
//     },
//     get birthday_57() {
//       return this._birthday;
//     },
//     set birthday_57(value) {
//       this._birthday = value;
//     },
//     get birthday_56() {
//       return this._birthday;
//     },
//     set birthday_56(value) {
//       this._birthday = value;
//     },
//     get birthday_56() {
//       return this._birthday;
//     },
//     set birthday_56(value) {
//       this._birthday = value;
//     },
//     get birthday_55() {
//       return this._birthday;
//     },
//     set birthday_55(value) {
//       this._birthday = value;
//     },
//     get birthday_55() {
//       return this._birthday;
//     },
//     set birthday_55(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_54() {
//       return this._birthday;
//     },
//     set birthday_54(value) {
//       this._birthday = value;
//     },
//     get birthday_53() {
//       return this._birthday;
//     },
//     set birthday_53(value) {
//       this._birthday = value;
//     },
//     get birthday_53() {
//       return this._birthday;
//     },
//     set birthday_53(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_52() {
//       return this._birthday;
//     },
//     set birthday_52(value) {
//       this._birthday = value;
//     },
//     get birthday_51() {
//       return this._birthday;
//     },
//     set birthday_51(value) {
//       this._birthday = value;
//     },
//     get birthday_51() {
//       return this._birthday;
//     },
//     set birthday_51(value) {
//       this._birthday = value;
//     },
//     get birthday_50() {
//       return this._birthday;
//     },
//     set birthday_50(value) {
//       this._birthday = value;
//     },
//     get birthday_49() {
//       return this._birthday;
//     },
//     set birthday_49(value) {
//       this._birthday = value;
//     },
//     get birthday_49() {
//       return this._birthday;
//     },
//     set birthday_49(value) {
//       this._birthday = value;
//     },
//     get birthday_48() {
//       return this._birthday;
//     },
//     set birthday_48(value) {
//       this._birthday = value;
//     },
//     get birthday_48() {
//       return this._birthday;
//     },
//     set birthday_48(value) {
//       this._birthday = value;
//     },
//     get birthday_47() {
//       return this._birthday;
//     },
//     set birthday_47(value) {
//       this._birthday = value;
//     },
//     get birthday_47() {
//       return this._birthday;
//     },
//     set birthday_47(value) {
//       this._birthday = value;
//     },
//     get birthday_46() {
//       return this._birthday;
//     },
//     set birthday_46(value) {
//       this._birthday = value;
//     },
//     get birthday_46() {
//       return this._birthday;
//     },
//     set birthday_46(value) {
//       this._birthday = value;
//     },
//     get birthday_45() {
//       return this._birthday;
//     },
//     set birthday_45(value) {
//       this._birthday = value;
//     },
//     get birthday_45() {
//       return this._birthday;
//     },
//     set birthday_45(value) {
//       this._birthday = value;
//     },
//     get birthday_44() {
//       return this._birthday;
//     },
//     set birthday_44(value) {
//       this._birthday = value;
//     },
//     get birthday_44() {
//       return this._birthday;
//     },
//     set birthday_44(value) {
//       this._birthday = value;
//     },
//     get birthday_43() {
//       return this._birthday;
//     },
//     set birthday_43(value) {
//       this._birthday = value;
//     },
//     get birthday_43() {
//       return this._birthday;
//     },
//     set birthday_43(value) {
//       this._birthday = value;
//     },
//     get birthday_42() {
//       return this._birthday;
//     },
//     set birthday_42(value) {
//       this._birthday = value;
//     },
//     get birthday_42() {
//       return this._birthday;
//     },
//     set birthday_42(value) {
//       this._birthday = value;
//     },
//     get birthday_41() {
//       return this._birthday;
//     },
//     set birthday_41(value) {
//       this._birthday = value;
//     },
//     get birthday_41() {
//       return this._birthday;
//     },
//     set birthday_41(value) {
//       this._birthday = value;
//     },
//     get birthday_40() {
//       return this._birthday;
//     },
//     set birthday_40(value) {
//       this._birthday = value;
//     },
//     get birthday_40() {
//       return this._birthday;
//     },
//     set birthday_40(value) {
//       this._birthday = value;
//     },
//     get birthday_39() {
//       return this._birthday;
//     },
//     set birthday_39(value) {
//       this._birthday = value;
//     },
//     get birthday_39() {
//       return this._birthday;
//     },
//     set birthday_39(value) {
//       this._birthday = value;
//     },
//     get birthday_38() {
//       return this._birthday;
//     },
//     set birthday_38(value) {
//       this._birthday = value;
//     },
//     get birthday_38() {
//       return this._birthday;
//     },
//     set birthday_38(value) {
//       this._birthday = value;
//     },
//     get birthday_37() {
//       return this._birthday;
//     },
//     set birthday_37(value) {
//       this._birthday = value;
//     },
//     get birthday_37() {
//       return this._birthday;
//     },
//     set birthday_37(value) {
//       this._birthday = value;
//     },
//     get birthday_36() {
//       return this._birthday;
//     },
//     set birthday_36(value) {
//       this._birthday = value;
//     },
//     get birthday_36() {
//       return this._birthday;
//     },
//     set birthday_36(value) {
//       this._birthday = value;
//     },
//     get birthday_35() {
//       return this._birthday;
//     },
//     set birthday_35(value) {
//       this._birthday = value;
//     },
//     get birthday_35() {
//       return this._birthday;
//     },
//     set birthday_35(value) {
//       this._birthday = value;
//     },
//     get birthday_34() {
//       return this._birthday;
//     },
//     set birthday_34(value) {
//       this._birthday = value;
//     },
//     get birthday_34() {
//       return this._birthday;
//     },
//     set birthday_34(value) {
//       this._birthday = value;
//     },
//     get birthday_33() {
//       return this._birthday;
//     },
//     set birthday_33(value) {
//       this._birthday = value;
//     },
//     get birthday_33() {
//       return this._birthday;
//     },
//     set birthday_33(value) {
//       this._birthday = value;
//     },
//     get birthday_32() {
//       return this._birthday;
//     },
//     set birthday_32(value) {
//       this._birthday = value;
//     },
//     get birthday_32() {
//       return this._birthday;
//     },
//     set birthday_32(value) {
//       this._birthday = value;
//     },
//     get birthday_31() {
//       return this._birthday;
//     },
//     set birthday_31(value) {
//       this._birthday = value;
//     },
//     get birthday_31() {
//       return this._birthday;
//     },
//     set birthday_31(value) {
//       this._birthday = value;
//     },
//     get birthday_30() {
//       return this._birthday;
//     },
//     set birthday_30(value) {
//       this._birthday = value;
//     },
//     get birthday_30() {
//       return this._birthday;
//     },
//     set birthday_30(value) {
//       this._birthday = value;
//     },
//     get birthday_29() {
//       return this._birthday;
//     },
//     set birthday_29(value) {
//       this._birthday = value;
//     },
//     get birthday_29() {
//       return this._birthday;
//     },
//     set birthday_29(value) {
//       this._birthday = value;
//     },
//     get birthday_28() {
//       return this._birthday;
//     },
//     set birthday_28(value) {
//       this._birthday = value;
//     },
//     get birthday_28() {
//       return this._birthday;
//     },
//     set birthday_28(value) {
//       this._birthday = value;
//     },
//     get birthday_27() {
//       return this._birthday;
//     },
//     set birthday_27(value) {
//       this._birthday = value;
//     },
//     get birthday_27() {
//       return this._birthday;
//     },
//     set birthday_27(value) {
//       this._birthday = value;
//     },
//     get birthday_26() {
//       return this._birthday;
//     },
//     set birthday_26(value) {
//       this._birthday = value;
//     },
//     get birthday_26() {
//       return this._birthday;
//     },
//     set birthday_26(value) {
//       this._birthday = value;
//     },
//     get birthday_25() {
//       return this._birthday;
//     },
//     set birthday_25(value) {
//       this._birthday = value;
//     },
//     get birthday_25() {
//       return this._birthday;
//     },
//     set birthday_25(value) {
//       this._birthday = value;
//     },
//     get birthday_24() {
//       return this._birthday;
//     },
//     set birthday_24(value) {
//       this._birthday = value;
//     },
//     get birthday_24() {
//       return this._birthday;
//     },
//     set birthday_24(value) {
//       this._birthday = value;
//     },
//     get birthday_23() {
//       return this._birthday;
//     },
//     set birthday_23(value) {
//       this._birthday = value;
//     },
//     get birthday_23() {
//       return this._birthday;
//     },
//     set birthday_23(value) {
//       this._birthday = value;
//     },
//     get birthday_22() {
//       return this._birthday;
//     },
//     set birthday_22(value) {
//       this._birthday = value;
//     },
//     get birthday_21() {
//       return this._birthday;
//     },
//     set birthday_21(value) {
//       this._birthday = value;
//     },
//     get birthday_21() {
//       return this._birthday;
//     },
//     set birthday_21(value) {
//       this._birthday = value;
//     },
//     get birthday_20() {
//       return this._birthday;
//     },
//     set birthday_20(value) {
//       this._birthday = value;
//     },
//     get birthday_20() {
//       return this._birthday;
//     },
//     set birthday_20(value) {
//       this._birthday = value;
//     },
//     get birthday_19() {
//       return this._birthday;
//     },
//     set birthday_19(value) {
//       this._birthday = value;
//     },
//     get birthday_19() {
//       return this._birthday;
//     },
//     set birthday_19(value) {
//       this._birthday = value;
//     },
//     get birthday_18() {
//       return this._birthday;
//     },
//     set birthday_18(value) {
//       this._birthday = value;
//     },
//     get birthday_18() {
//       return this._birthday;
//     },
//     set birthday_18(value) {
//       this._birthday = value;
//     },
//     get birthday_17() {
//       return this._birthday;
//     },
//     set birthday_17(value) {
//       this._birthday = value;
//     },
//     get birthday_16() {
//       return this._birthday;
//     },
//     set birthday_16(value) {
//       this._birthday = value;
//     },
//     get birthday_16() {
//       return this._birthday;
//     },
//     set birthday_16(value) {
//       this._birthday = value;
//     },
//     get birthday_15() {
//       return this._birthday;
//     },
//     set birthday_15(value) {
//       this._birthday = value;
//     },
//     get birthday_15() {
//       return this._birthday;
//     },
//     set birthday_15(value) {
//       this._birthday = value;
//     },
//     get birthday_14() {
//       return this._birthday;
//     },
//     set birthday_14(value) {
//       this._birthday = value;
//     },
//     get birthday_14() {
//       return this._birthday;
//     },
//     set birthday_14(value) {
//       this._birthday = value;
//     },
//     get birthday_13() {
//       return this._birthday;
//     },
//     set birthday_13(value) {
//       this._birthday = value;
//     },
//     get birthday_13() {
//       return this._birthday;
//     },
//     set birthday_13(value) {
//       this._birthday = value;
//     },
//     get birthday_12() {
//       return this._birthday;
//     },
//     set birthday_12(value) {
//       this._birthday = value;
//     },
//     get birthday_11() {
//       return this._birthday;
//     },
//     set birthday_11(value) {
//       this._birthday = value;
//     },
//     get birthday_11() {
//       return this._birthday;
//     },
//     set birthday_11(value) {
//       this._birthday = value;
//     },
//     get birthday_10() {
//       return this._birthday;
//     },
//     set birthday_10(value) {
//       this._birthday = value;
//     },
//     get birthday_10() {
//       return this._birthday;
//     },
//     set birthday_10(value) {
//       this._birthday = value;
//     },
//     get birthday_9() {
//       return this._birthday;
//     },
//     set birthday_9(value) {
//       this._birthday = value;
//     },
//     get birthday_9() {
//       return this._birthday;
//     },
//     set birthday_9(value) {
//       this._birthday = value;
//     },
//     get birthday_8() {
//       return this._birthday;
//     },
//     set birthday_8(value) {
//       this._birthday = value;
//     },
//     get birthday_8() {
//       return this._birthday;
//     },
//     set birthday_8(value) {
//       this._birthday = value;
//     },
//     get birthday_7() {
//       return this._birthday;
//     },
//     set birthday_7(value) {
//       this._birthday = value;
//     },
//     get birthday_7() {
//       return this._birthday;
//     },
//     set birthday_7(value) {
//       this._birthday = value;
//     },
//     get birthday_6() {
//       return this._birthday;
//     },
//     set birthday_6(value) {
//       this._birthday = value;
//     },
//     get birthday_6() {
//       return this._birthday;
//     },
//     set birthday_6(value) {
//       this._birthday = value;
//     },
//     get birthday_5() {
//       return this._birthday;
//     },
//     set birthday_5(value) {
//       this._birthday = value;
//     },
//     get birthday_5() {
//       return this._birthday;
//     },
//     set birthday_5(value) {
//       this._birthday = value;
//     },
//     get birthday_4() {
//       return this._birthday;
//     },
//     set birthday_4(value) {
//       this._birthday = value;
//     },
//     get birthday_4() {
//       return this._birthday;
//     },
//     set birthday_4(value) {
//       this._birthday = value;
//     },
//     get birthday_3() {
//       return this._birthday;
//     },
//     set birthday_3(value) {
//       this._birthday = value;
//     },
//     get birthday_3() {
//       return this._birthday;
//     },
//     set birthday_3(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_2() {
//       return this._birthday;
//     },
//     set birthday_2(value) {
//       this._birthday = value;
//     },
//     get birthday_1() {
//       return this._birthday;
//     },
//     set birthday_1(value) {
//       this._birthday = value;
//     },
//     get birthday_1() {
//       return this._birthday;
//     },
//     set birthday_1(value) {
//       this._birthday = value;
//     },
//     get birthday() {
//       return this._birthday;
//     },
//     set birthday(value) {
//       this._birthday = value;
//     },
//     bio: String,
//     city: String,
//     country: String,
//     following: Number,
//     followers: Number,
//   },
//   {
//     timestamps: true,
//   }
// );
// exports.profileSchema = profileSchema;
